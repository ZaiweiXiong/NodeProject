var fs = require('fs');
var et = require('elementtree');
var Client = require('node-rest-client').Client;
 var xml2js = require('xml2js');
 
var client = new Client();

var product="'APM'";//"'clarity'";
var server="http://Search.ca.com/";
var url = server+"_api/search/query?querytext="
+product+"&refiners='products'&sourceid='835d7d71-c7fd-4a0d-aa82-d6aa489a0985'&QueryTemplatePropertiesUrl='spfile://webroot/queryparametertemplate.xml'";

//var XML = et.XML;
//var ElementTree = et.ElementTree;
//var element = et.Element;
//var subElement = et.SubElement;

//var data, etree;

//data = fs.readFileSync('./pdf/'+'APM.xml').toString();
//etree = et.parse(data);

//console.log(etree);
//console.log(etree.findall('./entry/*').length);
//console.log(etree.findall('./entry/TenantId').length); // 2
//console.log(etree.findtext('./entry/ServiceName')); // MaaS
//console.log(etree.findall('./entry/category')[0].get('term')); // monitoring.entity.create
//console.log(etree.findall('*/category/[@term="monitoring.entity.update"]').length); // 1
//testclient(url);

var parser = new xml2js.Parser();
fs.readFile('./pdf/'+'t.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.dir(result.entry.TenantId);
        console.log('Done');
    });
});
