import frappe

def execute():
    # Fetch all Workspace documents
    workspaces = frappe.get_all("Workspace", fields=["name", "sequence_id", "parent_page"])
    
    # Loop through each Workspace and update the sequence_id
    for workspace in workspaces:
        print (workspace)

        # Check if the workspace name does not end with a colon and update parent_page
        if workspace.name.endswith(':') or workspace.name.lower() == "crm":
            print ("workspace ends with : or is crm, not modifying")
        else:
            new_sequence_id = (workspace.sequence_id or 0) + 10
            frappe.db.set_value("Workspace", workspace.name, "sequence_id", new_sequence_id)
            frappe.db.set_value("Workspace", workspace.name, "parent_page", "Advanced:")

    frappe.db.commit()
    
    print ("workspaces customized")