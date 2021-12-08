import React from 'react'

export default function Market() {
    return (
        <div class="row" style={{marginTop: "20px",marginLeft:"20px"}}>
            <div class="col-8">
                <h2>Available items on the Market</h2>
                <p>Click on one of the items to start buying</p>
                <br />
                <table class ="table table-hover table-dark">
                <thead>
                <tr>
        
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Barcode</th>
                <th scope="col">Price</th>
                <th scope="col">Options</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
                </table>
            </div>
            <div class="col-4">
                <h2>Owned Items</h2>
                <p>Click on sell item to put an item back on the Market</p>
                <br />
            </div>
        </div>
    );
}
