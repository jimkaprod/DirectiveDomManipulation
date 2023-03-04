import { Route } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SearchComponentLoaderService } from './services/search-component-loader.service';
import { ComponentsVisualisationComponent } from './components/components-visualisation/components-visualisation.component';
import { SearchComponent } from './components/search/search.component';

export default [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
    {
        path: 'main',
        component: MainComponent,
        providers: [
            SearchComponentLoaderService,
        ],
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full',
            },
            {
                path: 'search',
                component: SearchComponent,
            },
            {
                path: 'components',
                component: ComponentsVisualisationComponent,
            },
        ]
    }
] as Route[];