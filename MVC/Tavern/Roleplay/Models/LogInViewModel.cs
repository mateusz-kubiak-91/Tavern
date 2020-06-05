﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Roleplay.Models
{
    public class LogInViewModel
    {
            [Required]
            public string Login { get; set; }
            [Required]
            public string Password { get; set; }
            public bool RememberMe { get; set; }
    }
}
