console.log('custom erp-new js loads...')

// async function observeUrlChange() {

//     console.log('observing...')
//     let oldHref = document.location.href;
//     const body = document.querySelector("body");
//     const observer = new MutationObserver(async mutations => {

//         for (const mutation of mutations) {

//             if (oldHref !== document.location.href) {
//                 console.log('HREF CHANGES')
//                 setupPage()
//                 oldHref = document.location.href
//             }
//         } // next mutation
//     });

//     observer.observe(body, { childList: true, subtree: true });
// };

// function loader() {
//     console.log('loader fires');
//     setupPage();
// }

// window.addEventListener("load", observeUrlChange)

// window.addEventListener("load", loader)

// console.log('event listners added to load and body')

// async function setupPage() {

//     // get and parse current URL
//     let url = new URL(document.location.href);
//     let lastPart = url.pathname.split('/').filter(segment => segment !== "").pop();

//     console.log(`setting up page for ${url.pathname} page ${lastPart}`)

//     // handle any virtual dashboards (re-directs)
//     if (lastPart === 'crm%3A') {
//         window.location = '/crm'
//         return
//     } else if (lastPart === 'users%3A') {
//         window.location = '/app/user'
//         return
//     } else if (lastPart === 'accounting-dashboard%3A') {
//         window.location = '/app/dashboard-view/Simple%20Accounting'
//         return
//     } else if (lastPart === 'customers%3A') {
//         window.location = '/app/customer'
//         return
//     } else if (lastPart === 'invoices%3A') {
//         window.location = '/app/invoice'
//         return
//     } else if (lastPart === 'invoice-items%3A') {
//         window.location = '/app/invoice-item'
//         return
//     }

//     // simplify pages that need it
//     if (lastPart === 'sales-invoice') {
//         setUpSalesInvoice()
//     }

//     // set up breadcrumbs

//     if (lastPart === 'customer') {
//         console.log('setting breadcrumbs for customer')
//         await setBreadcrumbs([
//             { link: '/app/sales%3A', text: 'Sales:' },
//             { text: 'Customers:' },
//         ])
//     } else if (lastPart === 'sales-invoice') {
//         await setBreadcrumbs([
//             { link: '/app/sales%3A', text: 'Sales:' },
//             { text: 'Sales Invoices:' },
//         ])
//     } 
//     // else if (lastPart === 'sales-invoice') {
//     //     await setBreadcrumbs([
//     //         { link: '/app/sales%3A', text: 'Sales:' },
//     //         { text: 'Sales Invoices:' },
//     //     ])
//     // } 
//         else if (lastPart === 'invoice') {
//         await setBreadcrumbs([
//             { link: '/app/sales%3A', text: 'Sales:' },
//             { text: 'Invoices:' },
//         ])
//     } 
//     else if (lastPart === 'accounting-setup%3A') {
//         await setBreadcrumbs([
//             { link: '/app/accounting%3A', text: 'Accounting:' },
//             { text: 'Accounting Setup:' },
//         ])
//     }

// }

// function setUpSalesInvoice() {
//     console.log("setting up sales invoice page")


// }

// async function setBreadcrumbs(breadcrumbs) {

//     let html = ''

//     for (const breadcrumb of breadcrumbs) {
//         let pageName = breadcrumb.text //.replaceAll('%20', " ")
//         // pageName = pageName.replaceAll('-', ' ')
//         // pageName = pageName.replaceAll('%3A', ':')

//         if (html) {
//             html += '<li>>&nbsp;</li>'
//         }

//         if (breadcrumb.link) {
//             html += `<li><a href="${breadcrumb.link}">${pageName}</a></li>`
//         } else {
//             html += `<li>${pageName}</li>`
//         }
//     }

//     console.log(html)

//     let nav = document.getElementById('navbar-breadcrumbs')
//     nav.innerHTML = html

//     await new Promise(resolve => setTimeout(resolve, 1000));

//     nav = document.getElementById('navbar-breadcrumbs')

//     if (nav.innerHTML !== html) {
//         console.log('failed to set breadcrumbs after delay, re-setting these')
//         nav.innerHTML = html
//     }
// }

// // global stuff
// document.addEventListener('DOMContentLoaded', function () {
//     function hideElements(selector) {
//         var currentUser = frappe.boot.user.name;


//         if (currentUser !== 'Administrator') {
//             var intervalId = setInterval(function () {
//                 var elements = document.querySelectorAll(selector);
//                 if (elements.length > 0) {
//                     elements.forEach(function (el) {
//                         el.style.display = 'none';
//                     });
//                     clearInterval(intervalId); 
//                 }
//             }, 5); 
//         }
//     }

//     const selectors = [

//         'button[data-label="Edit"]',
//         'button[data-label="Create%20Workspace"]'
//     ];

//     selectors.forEach(hideElements);
// });

// // $(document).on('app_ready', function () {
// //     const doctypes = ["Opportunity", "Quotation", "Supplier Quotation",
// //         "Sales Invoice", "Delivery Note", "Sales Order",
// //         "Purchase Invoice", "Purchase Receipt", "Purchase Order"];

// //     doctypes.forEach(function (doctype) {
// //         frappe.ui.form.on(doctype, {
// //             refresh: function (frm) {
// //                 console.log('refreshedddd');

// //                 var timestamps = $(".frappe-timestamp");
// //                 timestamps.each(function (index, element) {
// //                     var timestamp = $(element).data("timestamp");
// //                     $(element).text(timestamp);
// //                 });
// //             }
// //         });

// //         // Preserving and appending to the existing onload event
// //         const originalOnload = frappe.listview_settings[doctype]?.onload;

// //         frappe.listview_settings[doctype] = {
// //             onload: function (listview) {
// //                 console.log('listview loaded');
// //                 if (originalOnload) {
// //                     originalOnload(listview);
// //                 }
// //             },
// //             ...frappe.listview_settings[doctype]
// //         };
// //     });
// // });

// frappe.listview_settings['Account'] = {
//     onload: function (listview) {
//         console.log('the account list view loads')
//     }
// };

// frappe.listview_settings['Invoice'] = {
//     onload: function (listview) {
//         console.log('the invoice list view loads')

//         listview.page.add_menu_item(__("Menu"));
//         listview.page.add_action_item(__("Actions"));
//         listview.page.set_primary_action('Primary Button');
//         listview.page.set_secondary_action('Secondary Button');
//         listview.page.add_inner_button("Inner Button");

//     }
// };

// frappe.ui.form.on('Invoice', {
//     onload: function (frm) {
//         console.log ('Invoice form loads')
//         frm.page.add_menu_item(__("Menuw"));
//         frm.page.add_action_item(__("Actionsw"));
//         frm.page.set_primary_action('Primary Button');
//         frm.page.set_secondary_action('Secondary Button');
//         frm.page.add_inner_button("Inner Button");
//     }
// });


// frappe.listview_settings['Invoice Item'] = {
//     onload: function (listview) {
//         console.log('the invoice item list view loads')

//         listview.page.add_menu_item(__("Menu"));
//         listview.page.add_action_item(__("Actions"));
//         listview.page.set_primary_action('Primary Button');
//         listview.page.set_secondary_action('Secondary Button');
//         listview.page.add_inner_button("Inner Button");

//     }
// };

// frappe.ui.form.on('Invoice Item', {
//     onload: function (frm) {
//         console.log ('Invoice item form loads')
//         frm.page.add_menu_item(__("Menu"));
//         frm.page.add_action_item(__("Actions"));
//         frm.page.set_primary_action('Primary Button');
//         frm.page.set_secondary_action('Secondary Button');
//         frm.page.add_inner_button("Inner Button");
//     }
// });


// function extend_listview_event(doctype, event, callback) {

//     if (!frappe.listview_settings[doctype]) {
//         frappe.listview_settings[doctype] = {};
//     }

//     const old_event = frappe.listview_settings[doctype][event];
//     frappe.listview_settings[doctype][event] = function (listview) {
//         if (old_event) {
//             old_event(listview);
//         }
//         callback(listview);
//     }
// }

// extend_listview_event("Sales Invoice", "onload", function (listview) {
//     console.log('Sales invoice onload event') //still doesn't fire :-()
// });


// frappe.listview_settings["Sales Invoice"].custom = () => {
//     console.log('loads')
// }



// frappe.ui.form.on('Sales Invoice', {
//     onload: function (frm) {
//         // Code to run when the form is fully loaded
//         frappe.show_alert({
//             message: "Sales invoice form is loaded!",
//             indicator: 'green'
//         }, 5); // 5 seconds duration

//         // Additional logic here
//     }
// });

// frappe.listview_settings["Account"] = {
//     onload: function (listview) {

//         frappe.show_alert({
//             message: "Account list is loaded! one",
//             indicator: 'green'
//         }, 5); // 5 seconds duration

//         console.log(listview)

//         // listview.page.add_inner_button('User Detail', () => js_detail());

//         document.querySelector('footer').innerText = 'FOOT!!'


//         //  listview.page.add_action_item(__("Actions"), () => { frappe.msgprint("Action Clicked"); });
//     }
// };



// frappe.ui.form.on('Account', {
//     onload: function (frm) {
//         // Code to run when the form is fully loaded
//         frappe.show_alert({
//             message: "Account form is loaded!",
//             indicator: 'green'
//         }, 5); // 5 seconds duration

//         // Additional logic here
//     }
// });
