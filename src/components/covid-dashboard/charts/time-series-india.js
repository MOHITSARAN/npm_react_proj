import React from "react";
import getData from '../fetch-data';
import FusionCharts from 'fusioncharts';
//import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, TimeSeries);

class TimeSeriesIndia extends React.Component {
  _isMounted = false;

	constructor(props) {
     	const dates = new Date();

	    super(props);
	    this.state = {
	      timeseriesDs: {
	        type: 'timeseries',
	        renderAt: 'container',
	        width: '100%',
	        height: '420',
	        dataSource: {
            chart: {
                caption: "Total Covid-19 Cases",
            },
            caption: {
              text: this.props.name +" Covid-19 Cases Time Series"
            },
            subcaption: {
              text: "Confirmed, Recovered & Deaths"
            },
            series: "Type",
            yaxis: [
              {
                plot: "Total Cases",
              }
            ],
	        xaxis: {
              initialinterval: {
                from: "1/Apr/20",
                to: toString(dates)
              }
            },
	      // Initially data is set as null
	      data: null
	    }
	  }
	}
 }

 componentDidMount() {
    this._isMounted = true;

    getData("https://pomber.github.io/covid19/timeseries.json").then((resultData) => {
    
      if (this._isMounted) {

  	    const data_schema = [{
          "name": "Time",
          "type": "date",
          "format": "%d/%b/%y"
        }, {
          "name": "Type",
          "type": "string"
        }, {
          "name": "Number of cases in "+this.props.name,
          "type": "number"
        }]

        var country_data = [];
        resultData["India"].forEach(({ date, confirmed, recovered, deaths }) => {
   	    	  const date_from  = (date.split("-")[1]+"/"+date.split("-")[2]+"/"+date.split("-")[0]).toString()
            const dates = new Date(date_from);
                   
            const formattedDate = dates.toLocaleDateString('en-GB', {
              day: 'numeric', month: 'short', year: '2-digit'
            }).replace(/ /g, '/');

            var confirmed_arr = []
            confirmed_arr.push(formattedDate,"confirmed", confirmed)

            var recovered_arr = []
            recovered_arr.push(formattedDate,"recovered", recovered)
            
            var deaths_arr = []
            deaths_arr.push(formattedDate,"deaths", deaths)

            country_data.push(confirmed_arr,recovered_arr,deaths_arr)
          }
        );

	      // First we are creating a DataStore
	      const fusionDataStore = new FusionCharts.DataStore();
	      // After that we are creating a DataTable by passing our data and schema as arguments
	      const fusionTable = fusionDataStore.createDataTable(country_data, data_schema);
	      // Afet that we simply mutated our timeseries datasource by attaching the above
	      // DataTable into its data property.
	      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
	      timeseriesDs.dataSource.data = fusionTable;

	      this.setState({
	        timeseriesDs
	      });

       }

      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      const { error, timeseriesDs } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
			<ReactFC {...timeseriesDs} />
        )
      }
   }
  }

export default TimeSeriesIndia;