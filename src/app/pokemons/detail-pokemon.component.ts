import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Pokemon } from "./pokemon";
import { PokemonsService } from "./pokemon.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id')
        this.getPokemon(id);
    }

    getPokemon(id: number): void {
        this.pokemon = this.pokemonsService.getPokemon(id);
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
}