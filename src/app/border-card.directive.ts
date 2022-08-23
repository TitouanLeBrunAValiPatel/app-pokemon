import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  private initialColor : string = '#F5F5F5';
  private defaultColor: string = '#009688';
  constructor(private el: ElementRef) // est une reference 
   { 
    this.setBorder(this.initialColor);
    this.setHeight(180);
   }
   @HostListener('mouseenter') onMouseEnter(){ // permet d'ecouter ce que l'utilisateur fait sur la page
      this.setBorder(this.borderColor || this.defaultColor);
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }
  @Input('appBorderCard') borderColor:string;


   // METHODE 

   setHeight(height: number): void{
    this.el.nativeElement.style.height = `${height}px`;
   }
   setBorder(color: string){
    this.el.nativeElement.style.border = `4px solid ${color}`;
   }
}
