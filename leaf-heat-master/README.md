# README

With Leaflet Heatmaps, latitude and longitude is required. The animal services data provided in this is based on zip code. This data needs to be 'geocoded' (transformed from an address, zip, etc. to coordinates).

There are geocoding libraries. Many require an API and limit the number of geocoding requests in a given time period (i.e. maybe 10 per minute). So geocoding is another step in preparing the data.

In this example (for lack of time), I have done the geocoding by hand, entering a zip code into Google Maps and collected the latitude / longitude values.
