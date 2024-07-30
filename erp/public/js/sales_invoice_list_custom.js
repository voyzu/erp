function extend_listview_event(doctype, event, callback) {

    if (!frappe.listview_settings[doctype]) {
        frappe.listview_settings[doctype] = {};
    }

    const old_event = frappe.listview_settings[doctype][event];
    frappe.listview_settings[doctype][event] = function (listview) {
        if (old_event) {
            old_event(listview);
        }
        callback(listview);
    }
}

extend_listview_event("Sales Invoice", "onload", function (listview) {
     console.log ('Sales invoice onload event') //still doesn't fire :-(
});