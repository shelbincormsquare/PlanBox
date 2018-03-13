import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private ProjectsService: ProjectService) { }

  ngOnInit() {
    this.ProjectsService.getProjects()
      .subscribe(data => {
        this.projects = data;
        console.log(data);
      });
  }

}
