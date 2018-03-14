import { Component, OnInit, ValueProvider } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  title: string;
  project: Project;
  form: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService, private fb: FormBuilder) {
    this.project = new Project();
    this.createForm();
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.title = id ? 'Edit Project' : 'New Project';

      if (!id)
        return;

      this.projectService.getProject(id)
        .subscribe(
          project => this.project = project,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }
  createForm() {
    this.form = this.fb.group({
      name: '',
      id: ''
    });
  }

  save() {
    console.log(this.form.value);
  }

}
