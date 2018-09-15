import React, { Component } from 'react';

import { Collapse, Navbar, MenuItem, NavDropdown, Nav, NavItem } from 'react-bootstrap';



class Map extends Component {
	constructor(props) {
		super(props);
	
		this.state = {

		}
	}

  render() {
    return (
    	<div style="width: 640px; height: 480px" id="mapContainer">
					<script>
						// Initialize the platform object:
						var platform = new H.service.Platform({
						'app_id': '{YOUR_APP_ID} ',
						'app_code': '{YOUR_APP_CODE} '
						});

						// Obtain the default map types from the platform object
						var maptypes = platform.createDefaultLayers();

						// Instantiate (and display) a map object:
						var map = new H.Map(
						document.getElementById('mapContainer'),
						maptypes.normal.map,
						{
							zoom: 10,
							center: { lng: 13.4, lat: 52.51 }
						});
					</script>
			</div>
    );
  }
}

export default Map;