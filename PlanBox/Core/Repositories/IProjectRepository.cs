using System.Collections.Generic;
using System.Threading.Tasks;
using PlanBox.Core.Models;

namespace PlanBox.Core.Repositories
{
    public interface IProjectRepository
    {
        Task<Project> GetProject(int id); 
        void Add(Project project);
        void Remove(Project project);
        Task<List<Project>> GetProjects();
    }
}