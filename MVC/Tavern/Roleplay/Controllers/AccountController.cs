using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace Roleplay.Controllers
{
    public class AccountController : Controller
    {
        private readonly EFCContext _context;
        protected SignInManager<IdentityUser> SignInManager { get; }
        protected UserManager<IdentityUser> UserManager { get; }
        public AccountController(SignInManager<IdentityUser> signInManager, EFCContext context, UserManager<IdentityUser> userManager)
        {
            SignInManager = signInManager;
            UserManager = userManager;
            _context = context;
        }
        public async Task<IActionResult> Account()
        {
            var user = await UserManager.GetUserAsync(User);
            var heroes = _context.Hero.Where(h => h.User == user).ToList();
            return View(heroes);
        }
        [HttpGet]
        public async Task<IActionResult> LogOut()
        {
            await SignInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
        [HttpGet]
        public async Task<IActionResult> GoCreateHero()
        {
            return RedirectToAction("CreateHero", "CreateHero");
        }
        [HttpGet]
        public async Task<IActionResult> GoPlayground()
        {
            return RedirectToAction("Playground", "Playground");
        }
        public async Task<IActionResult> ToList()
        {
            var user = await UserManager.GetUserAsync(User);
            var heroes = _context.Hero.Where(h => h.User == user).ToList();
            string result = "";
            foreach (var hero in heroes)
            {
                result += hero.Name + ", ";
            }
            return Content(result);
        }
        
    }
}
