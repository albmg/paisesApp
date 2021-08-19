import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.paisService.getPaisPorCodigo( id)),
        tap ( console.log )
        //tap ( resp => console.log(resp))
      )
      .subscribe( pais => {
        console.log(pais)
        this.pais = pais
      })


  //  this.activatedRoute.params
  //      .subscribe( params => {
  //        console.log(params.id)
  //        /* .subscribe( ({ id }) => {
  //        console.log(id)
  //      } ) */
  //        this.paisService.getPaisPorCodigo( params.id)
  //          .subscribe( pais => {
  //            console.log(pais)
  //          })
  //      } )
  }

}
