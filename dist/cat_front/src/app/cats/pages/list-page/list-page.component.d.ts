import { OnInit } from '@angular/core';
import { CatService } from '../../../services/cats.service';
export declare class ListPageComponent implements OnInit {
    private catService;
    cats: any[];
    constructor(catService: CatService);
    ngOnInit(): void;
    loadCats(): void;
    getImageUrl(image: string): string;
}
