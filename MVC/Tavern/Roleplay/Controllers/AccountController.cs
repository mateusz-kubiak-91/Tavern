using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Roleplay.Controllers
{
    public class AccountController : Controller
    {
        protected SignInManager<IdentityUser> SignInManager { get; }
        public AccountController(SignInManager<IdentityUser> signInManager)
        {
            SignInManager = signInManager;
        }
        public IActionResult Account()
        {
            return View();
        }
        [HttpGet]
        public async Task<IActionResult> LogOut()
        {
            await SignInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}
