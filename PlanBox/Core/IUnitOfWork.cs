using System.Threading.Tasks;

namespace PlanBox.Core
{
    public interface IUnitOfWork
    {
            Task CompleteAsync();
    }
}