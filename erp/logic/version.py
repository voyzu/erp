import frappe
from erp import __version__ as app_version

@frappe.whitelist()
def get_app_version():
    return app_version