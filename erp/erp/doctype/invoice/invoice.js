// Copyright (c) 2024, Voyzu Ltd and contributors
// For license information, please see license.txt

frappe.ui.form.on("Invoice", {
    refresh(frm) {
        console.log('invoice form refresh');


        // Attach an event handler to the fields in the child table
        frm.fields_dict['items'].grid.wrapper.on('awesomplete-selectcomplete', '.input-with-feedback', function (e) {
            const updated_row = $(e.target).closest("[data-name]");
            const docname = updated_row.attr("data-name");
            const doc = frm.fields_dict['items'].grid.grid_rows_by_docname[docname].doc;

            console.log('the item dropdown was changed');
            console.log(doc);

            // Update price for the changed row
            update_price(frm, doc);

            // Log the entire grid (child table 'items')
            const items = frm.fields_dict['items'].grid.data;
            console.log('Complete items child table:');
            console.log(items);
        });

        frm.fields_dict['items'].grid.wrapper.on('change', 'input', function (e) {
            const updated_row = $(e.target).closest("[data-name]");
            const doc = frm.fields_dict['items'].grid.grid_rows_by_docname[updated_row.attr("data-name")].doc;
            console.log('an item in the row was changed');
            console.log(doc);

            // Update price for the changed row
            update_price(frm, doc);

            // Log the entire grid (child table 'items')
            const items = frm.fields_dict['items'].grid.data;
            console.log('Complete items child table:');
            console.log(items);
        });

        // Optionally, update prices for the entire grid on refresh (if needed)
        const items = frm.fields_dict['items'].grid.data;
        items.forEach(row => update_price(frm, row));
    },
});

// Define a function to set the price as equal to the quantity
function update_price(frm, row) {
    row.price = row.quantity;
    // Trigger refresh for the grid row to reflect changes in the UI
    frm.fields_dict['items'].grid.refresh();
}


frappe.ui.form.on('Invoice Line', {
    items_remove: function (form, doctype, id) {
        // console.log(id);
        console.log('an item was removed')
        console.log(id)
    },
    items_add: function (form, doctype, id) {
        // console.log(id);
        console.log('an item was added')
        console.log(id)
    },

    // Items_remove: function (form, doctype, id) {
    // 	// console.log(id);
    // 	frappe.call({
    // 		method: "custom_app.companies.doctype.company.company.remove_company_from_contact",
    // 		args: {
    // 			"company_contact": id
    // 		},
    // 		callback: function(r) {
    // 			if(r.message) {
    // 				frappe.msgprint(r.message);
    // 			}
    // 		}
    // 	});
    // }
});