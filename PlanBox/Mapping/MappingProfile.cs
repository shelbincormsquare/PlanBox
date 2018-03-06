using AutoMapper;
using PlanBox.Core.Models;
using PlanBox.Core.Resources;

namespace PlanBox.Mapping
{
    public class MappingProfile :Profile
    {
          public MappingProfile()
        {
            // Domain to API Resource
            CreateMap<Project, ProjectResource>();
            CreateMap<WorkItem, WorkItemResource>();

            // API Resource to Domain
             CreateMap<ProjectResource, Project>()
             .ForMember(p => p.Id, opt => opt.Ignore());
             CreateMap<WorkItemResource, WorkItem>();
        }
    }
}