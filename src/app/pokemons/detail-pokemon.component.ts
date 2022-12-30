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

    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
}