using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Roleplay.Models;

namespace Roleplay.Controllers
{
    public class HomeController : Controller
    {
        protected UserManager<IdentityUser> UserManager { get; }
        protected SignInManager<IdentityUser> SignInManager { get; }
        public HomeController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            //Rejestracja.4.II.Sprawdzać walidację modelu.
            if (ModelState.IsValid)
            {
                var user = new IdentityUser() //nawias opcjonalnie
                {
                    UserName = model.Login,
                    Email = model.Email,
                };

                var result = await UserManager.CreateAsync(user, model.Password);

                //Rejestracja.4.III. Rejestrować użytkownika przy pomocy usługi SignInManager.
                if (result.Succeeded)
                {
                    await SignInManager.SignInAsync(user, false); // Logowanie(1.4) urzytkowani zalogowany od razu po rejestracji
                    //Rejestracja.4.IV. Jeśli rejestracja zakończy się pomyślnie, zrób przekierowanie na akcję Index kontrolera Home.
                    return RedirectToAction("Account", "Account");
                }
                //Rejestracja.4.V. Jeśli rejestracja zakończy się niepomyślnie, zwróć widok z formularzem logowania i odpowiednim komunikatem.
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }
            return View(model);
        }
        //Logowanie.3 Utwórz metodę LogIn w kontrolerze Account, metoda powinna: 
        //Logowanie.3.I Przyjmować żądanie typu GET
        [HttpGet]
        public IActionResult LogIn()
        {
            return View();
        }
        //Logowanie.4 Utwórz metodę LogIn w kontrolerze Account, metoda powinna: 
        //Logowanie.4.I Przyjmować żądanie typu POST
        [HttpPost]
        public async Task<IActionResult> LogIn(LogInViewModel model)
        {
            //Logowanie.4.II.Sprawdzać walidację modelu.
            if (ModelState.IsValid)
            {
                //Logowanie.4.III Logować użytkownika za pomocą usługi SignInManager.
                var result = await SignInManager.PasswordSignInAsync(model.Login, model.Password, model.RememberMe, false);
                //Logowanie.4.IV W przypadku pomyślnego zalogowania przekierować na stronę główną z odpowiednim komunikatem.
                if (result.Succeeded)
                    return RedirectToAction("Account", "Account");
                //Logowanie.4.V W przypadku, gdy wystąpią błędy logowania, login lub hasło będą niepoprawne zwrócić widok 
                //formularza z odpowiednimi komunikatami błędów.
                ModelState.AddModelError("", "Invalid login sttempt!");
            }
            return View(model);
        }
    }
}
