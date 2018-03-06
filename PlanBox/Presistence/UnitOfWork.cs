using System.Threading.Tasks;
using PlanBox.Core;
using PlanBox.Persistence;

namespace PlanBox.Persistence
{
    public class UnitOfWork:IUnitOfWork
    {
        private readonly PlanBoxDbContext context;
         public UnitOfWork (PlanBoxDbContext context) {
            this.context = context;

        }
        public async Task CompleteAsync () {
            await context.SaveChangesAsync ();
        }
    }
}