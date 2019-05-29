//var columns = ['CS_Index', 'Consumer debt service ratio', 'Debt service ratio', 'East North Central', 'Financial obligations ratio', 'Housing Affordability Index', 'Market Absorption Rate (%)', 'Middle Atlantic', 'Mortgage debt service ratio', 'Mountain', 'New England', 'Pacific', 'South Atlantic', 'USA', 'Unemployment Rate', 'West North Central', 'West South Central', 'period']; // 2 column table
d3.json("/historical-data", function(data) {
    console.log(data);
});
