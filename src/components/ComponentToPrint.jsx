import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
        <table>
            <tbody>
                <tr><td>Name</td><td>Shola</td></tr>
                <tr><td>Age</td><td>29</td></tr>
                <tr><td>Sex</td><td>Male</td></tr>
            </tbody>
        </table>
    </div>
  );
});