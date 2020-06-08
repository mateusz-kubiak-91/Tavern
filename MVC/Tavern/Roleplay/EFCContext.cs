using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Roleplay.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roleplay
{
    public class EFCContext : IdentityDbContext
    {
        public EFCContext(DbContextOptions<EFCContext> options) : base(options) { }
        public DbSet<HeroModel> Hero { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
