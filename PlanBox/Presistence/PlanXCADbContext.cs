using Microsoft.EntityFrameworkCore;
using PlanBox.Core.Models;

namespace PlanBox.Persistence
{
    public class PlanBoxDbContext:DbContext
    {
        public DbSet<Project> Projects { get; set; }
        public DbSet<WorkItem> WorkItems { get; set; }
           public PlanBoxDbContext(DbContextOptions<PlanBoxDbContext> options)
      : base(options)
        {
        }
    }
}