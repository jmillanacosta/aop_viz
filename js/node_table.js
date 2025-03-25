// Placeholder for node table functionality.
// Instructions: Implement functions to populate and manage the node table based on the Cytoscape network data.
// Use this logic as a starting point or implement your own.

function populateNodeTable(node) {
    // TODO: Retrieve node data and populate the table.
    console.log("Populating node table for node:", node.data());
    const table = $("#node_table");
    const tableBody = table.find("tbody").empty();
    // Appends a row to the node table. Which data is needed and how do we get it?
    tableBody.append(`
        <tr>
            <td> </td>
        </tr>
    `);
}
