using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Roleplay.Models;

namespace Roleplay.Controllers
{
    public class CreateHeroController : Controller
    {
        private readonly EFCContext _context;
        protected UserManager<IdentityUser> UserManager { get; }
        public CreateHeroController(EFCContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            UserManager = userManager;
        }
        public IActionResult CreateHero()
        {
            return View();
        }
        [HttpGet]
        public async Task<IActionResult> GoBack()
        {
            return RedirectToAction("Account", "Account");
        }
        [HttpPost]
        public async Task<IActionResult> CreateHero(HeroModel heroModel)
        {
            heroModel.User = await UserManager.GetUserAsync(User);
            _context.Add(heroModel);
            _context.SaveChanges();
            return RedirectToAction("Account", "Account");
        }
    }
}
