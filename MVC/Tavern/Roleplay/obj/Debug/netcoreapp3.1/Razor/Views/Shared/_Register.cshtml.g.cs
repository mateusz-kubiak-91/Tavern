#pragma checksum "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "91b1870a8265d38f4e644593147bc9272c5b539f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Shared__Register), @"mvc.1.0.view", @"/Views/Shared/_Register.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\_ViewImports.cshtml"
using Roleplay.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"91b1870a8265d38f4e644593147bc9272c5b539f", @"/Views/Shared/_Register.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"83eb603be05417325ccfa196ee7c2ae1f8e29c20", @"/Views/_ViewImports.cshtml")]
    public class Views_Shared__Register : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<RegisterViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
 using (Html.BeginForm("Register", "Home", FormMethod.Post))
{

#line default
#line hidden
#nullable disable
            WriteLiteral("    <div class=\"form-group text-center\">\r\n        ");
#nullable restore
#line 6 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.LabelFor(x => x.Login));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n        ");
#nullable restore
#line 8 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.TextBoxFor(x => x.Login, new {placeholder="Enter Login"}));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n        ");
#nullable restore
#line 12 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.LabelFor(x => x.Email));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n        ");
#nullable restore
#line 14 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.TextBoxFor(x => x.Email, new {placeholder = "Enter E-mail"}));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n        ");
#nullable restore
#line 18 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.LabelFor(x => x.Password));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n        ");
#nullable restore
#line 20 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.PasswordFor(x => x.Password, new {placeholder = "Enter Password"}));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n        ");
#nullable restore
#line 24 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.LabelFor(x => x.RepeatPassword));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n        ");
#nullable restore
#line 26 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.PasswordFor(x => x.RepeatPassword, new {placeholder = "Repeat Password"}));

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n        <br />\r\n    </div>\r\n    <div class=\"form-group text-center\">\r\n        <button class=\"btn btn-dark\">Register</button>\r\n        <br />\r\n    </div>\r\n");
#nullable restore
#line 33 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
   Write(Html.ValidationSummary());

#line default
#line hidden
#nullable disable
#nullable restore
#line 33 "D:\CL\Projekty\Tawerna\MVC\Tavern\Roleplay\Views\Shared\_Register.cshtml"
                                 
}

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<RegisterViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
