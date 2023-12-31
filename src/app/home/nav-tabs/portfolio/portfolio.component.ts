import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { appconstants } from 'src/app/Constants/app-constants';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  //styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  hometab: string = 'home';
  abouttab: string = 'about';
  resumetab: string = 'resume';
  servicestab: string = 'services';
  portfoliotab: string = 'portfolio';
  contacttab: string = 'contact';
  header: string = 'header';
  homenavtab: string = 'hometab';
  aboutnavtab: string = 'abouttab';
  resumenavtab: string = 'resumetab';
  servicesnavtab: string = 'servicestab';
  portfolionavtab: string = 'portfoliotab';
  contactnavtab: string = 'contacttab';
  showinterestssection: boolean = false;
  linkedURL : string = appconstants.LinkedinprofileURL;
  githubURL : string = appconstants.GithubURL;
  id: any;
  C1URL: string = appconstants.C1URL;
  C2URL: string = appconstants.C2URL;
  C3URL: string = appconstants.C3URL;
  Pl1URL: string = appconstants.Pl1URL;
  Pl2URL: string = appconstants.Pl2URL;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  opentab(event:any){
    this.showinterestssection = false;

    if(event.target.name == this.abouttab){
      this.router.navigate(['about']);
    }
    else if(event.target.name == this.resumetab){
      this.router.navigate(['resume']);
    }
    else if(event.target.name == this.servicestab){
      this.router.navigate(['services']);
    }
    else if(event.target.name == this.contacttab){
      this.router.navigate(['contact']);
    }
    else if(event.target.name == this.portfoliotab){
    }
    else{
      this.showinterestssection = true;
      this.router.navigate(['home']);
    }
  
  }

  openportfolio(event:any){
    this.id = event.currentTarget.id;
    this.router.navigate(['portfolioinfo/', this.id]);
  }

}
