# Copyright (c) 2024, Voyzu Ltd and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

class InvoiceLine(Document):
	def validate(self):
		print ("line validate")
		logger.debug("Validate called")
		self.calculate_line_total()
       
	def before_insert(self):
		logger.debug("Before insert called")

	def before_save(self):
		logger.debug("Before save called")

	def after_insert(self):
		logger.debug("After insert called")
		
	def calculate_line_total(self):
		self.line_total = (self.quantity or 0) * (self.price or 0)
