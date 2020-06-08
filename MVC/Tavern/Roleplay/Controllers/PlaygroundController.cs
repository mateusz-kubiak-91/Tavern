using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Roleplay.Controllers
{
    public class PlaygroundController : Controller
    {
        private readonly EFCContext _context;
        protected UserManager<IdentityUser> UserManager { get; }
        public PlaygroundController(EFCContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            UserManager = userManager;
        }
        public IActionResult Playground(int hero)
        {
            var heroView = _context.Hero.SingleOrDefault(h => h.ID == hero);
            return View(heroView);
        }
        [HttpGet]
        public async Task<IActionResult> GoBack()
        {
            return RedirectToAction("Account", "Account");
        }

    }
}
