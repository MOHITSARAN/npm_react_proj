import React from "react";
import getData from '../fetch-data';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class PieChart extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      response: '',
      chartConfigs:''
    };
  }
 componentDidMount() {
    this._isMounted = true;

    getData("https://coronavirus-19-api.herokuapp.com/countries/"+this.props.url).then((resultData) => {
      
      if (this._isMounted) {

      	const myDataSource = {
      	 	"chart": {
	            caption: "Total Covid-19 Cases In "+this.props.url,
	            subcaption: "",
	            "showPercentInTooltip": "0",
	            "showPercentValues": "0",
	            "animateClockwise": "1",
	            defaultcenterlabel: "",
	            showValues:'1',
	            aligncaptionwithcanvas: "0",
	            captionpadding: "0",
	            pieRadius: "55",
	            centerlabel: "# Cases: $value",
	            legendIconSides: "0",
	            theme: "fusion",
	    	},
	          data: [{
	            label: "Total Cases",
	            value: resultData['cases']
	          },
	          {
	            label: "Deaths",
	            value: resultData['deaths']
	          },
	          {
	            label: "Recovered",
	            value: resultData['recovered']
	          },
	          {
	            label: "Today Cases",
	            value: resultData['todayCases']
	          },
	          {
	            label: "Active Cases",
	            value: resultData['active']
	          },
	          {
	            label: "Critical Cases",
	            value: resultData['critical']
	          }
	        ]
	    }
        
	    this.setState({
	      isLoaded: true,
	      chartConfigs : {
		  	type: 'doughnut2d',
		  	width: '100%',
		  	height: '320',
		  	dataFormat: 'json',
		  	dataSource: myDataSource,
			}
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
      const { error, chartConfigs } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
			<ReactFC {...chartConfigs} />
        )
      }
   }
  }

export default PieChart;