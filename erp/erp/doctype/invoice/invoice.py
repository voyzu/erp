# Copyright (c) 2024, Voyzu Ltd and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import logging
import json

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class Invoice(Document):
	def before_save(self):
		print ("before same")
		logger.debug("Before save called")


def before_save(doc,method):
	print ("before same")
	print (method)
	print (doc)
	doc_dict = doc.as_dict()
	print ("Document Dictionary: %s", json.dumps(doc_dict, indent=4))
 
  #	 Loop through each item in the items table of the invoice
	for item in doc.items:
		# Calculate the line total for each item
		item.line_total = item.price * item.quantity
  
	doc.invoice_total = sum(item.line_total for item in doc.items)

