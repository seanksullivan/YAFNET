﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.239
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace YAF.Types
{



	using System.Xml.Serialization;

	// 
	// This source code was auto-generated by xsd, Version=4.0.30319.1.
	// 


	/// <remarks/>
	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.1")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
	[XmlRoot("Resources")]
	public partial class ThemeResources
	{

		private ResourcesPage[] pageField;

		private string themeField;

		private string dirField;

		/// <remarks/>
		[System.Xml.Serialization.XmlElementAttribute("page", Form = System.Xml.Schema.XmlSchemaForm.Unqualified)]
		public ResourcesPage[] page
		{
			get
			{
				return this.pageField;
			}
			set
			{
				this.pageField = value;
			}
		}

		/// <remarks/>
		[System.Xml.Serialization.XmlAttributeAttribute()]
		public string theme
		{
			get
			{
				return this.themeField;
			}
			set
			{
				this.themeField = value;
			}
		}

		/// <remarks/>
		[System.Xml.Serialization.XmlAttributeAttribute()]
		public string dir
		{
			get
			{
				return this.dirField;
			}
			set
			{
				this.dirField = value;
			}
		}
	}

	/// <remarks/>
	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.1")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
	public partial class ResourcesPage
	{

		private ResourcesPageResource[] resourceField;

		private string nameField;

		/// <remarks/>
		[System.Xml.Serialization.XmlElementAttribute("Resource", Form = System.Xml.Schema.XmlSchemaForm.Unqualified,
			IsNullable = true)]
		public ResourcesPageResource[] Resource
		{
			get
			{
				return this.resourceField;
			}
			set
			{
				this.resourceField = value;
			}
		}

		/// <remarks/>
		[System.Xml.Serialization.XmlAttributeAttribute()]
		public string name
		{
			get
			{
				return this.nameField;
			}
			set
			{
				this.nameField = value;
			}
		}
	}

	/// <remarks/>
	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.1")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
	public partial class ResourcesPageResource
	{

		private string tagField;

		private string languageField;

		private string valueField;

		/// <remarks/>
		[System.Xml.Serialization.XmlAttributeAttribute()]
		public string tag
		{
			get
			{
				return this.tagField;
			}
			set
			{
				this.tagField = value;
			}
		}

		/// <remarks/>
		[System.Xml.Serialization.XmlAttributeAttribute()]
		public string language
		{
			get
			{
				return this.languageField;
			}
			set
			{
				this.languageField = value;
			}
		}

		/// <remarks/>
		[System.Xml.Serialization.XmlTextAttribute()]
		public string Value
		{
			get
			{
				return this.valueField;
			}
			set
			{
				this.valueField = value;
			}
		}
	}

	/// <remarks/>
	[System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "4.0.30319.1")]
	[System.SerializableAttribute()]
	[System.Diagnostics.DebuggerStepThroughAttribute()]
	[System.ComponentModel.DesignerCategoryAttribute("code")]
	[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
	[System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
	public partial class NewDataSet
	{

		private ThemeResources[] itemsField;

		/// <remarks/>
		[System.Xml.Serialization.XmlElementAttribute("Resources")]
		public ThemeResources[] Items
		{
			get
			{
				return this.itemsField;
			}
			set
			{
				this.itemsField = value;
			}
		}
	}
}