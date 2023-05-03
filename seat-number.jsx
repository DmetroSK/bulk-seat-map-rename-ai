#target illustrator

function renameAndSortLayers() {
    var doc = app.activeDocument;
    var selectedSeats = getSelectedObjects();

    if (selectedSeats.length === 0) {
        alert("No objects are selected. Please select the seats you want to rename.");
        return;
    }

    var areaName = prompt("Enter Area Name:", "");
    var sectionName = prompt("Enter Section Name:", "");
    var rowName = prompt("Enter Row Name:", "");

    selectedSeats.sort(function(a, b) {
        return b.left - a.left;
    });

    for (var i = 0; i < selectedSeats.length; i++) {
        var seat = selectedSeats[i];
        var seatNumber = i + 1;
        seat.name = areaName + "-" + sectionName + "-" + rowName + "-" + seatNumber;
    }

    groupSelectedObjects(rowName, selectedSeats);
}

function getSelectedObjects() {
    var selectedObjects = [];
    var layers = app.activeDocument.layers;

    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        for (var j = 0; j < layer.pageItems.length; j++) {
            var item = layer.pageItems[j];
            if (item.selected) {
                selectedObjects.push(item);
            }
        }
    }

    return selectedObjects;
}

function groupSelectedObjects(rowName, selectedSeats) {
    var doc = app.activeDocument;
    var layer = doc.activeLayer;
    var group = layer.groupItems.add();
    group.name = rowName;

    for (var i = 0; i < selectedSeats.length; i++) {
        var item = selectedSeats[i];
        item.move(group, ElementPlacement.INSIDE);
    }
}

renameAndSortLayers();
