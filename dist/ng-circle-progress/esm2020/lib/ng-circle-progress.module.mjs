import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent, CircleProgressOptions } from './ng-circle-progress.component';
import * as i0 from "@angular/core";
export class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
}
NgCircleProgressModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: NgCircleProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgCircleProgressModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: NgCircleProgressModule, declarations: [CircleProgressComponent], imports: [CommonModule], exports: [CircleProgressComponent] });
NgCircleProgressModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: NgCircleProgressModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: NgCircleProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CircleProgressComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [CircleProgressComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2lyY2xlLXByb2dyZXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNpcmNsZS1wcm9ncmVzcy9zcmMvbGliL25nLWNpcmNsZS1wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBa0MscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFVaEksTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQTBDLEVBQUU7UUFDekQsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7YUFDdEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7bUhBUlUsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBTmxCLHVCQUF1QixhQUVwQyxZQUFZLGFBRUosdUJBQXVCO29IQUV0QixzQkFBc0IsWUFMeEI7WUFDUCxZQUFZO1NBQ2I7MkZBR1Usc0JBQXNCO2tCQVBsQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENpcmNsZVByb2dyZXNzQ29tcG9uZW50LCBDaXJjbGVQcm9ncmVzc09wdGlvbnNJbnRlcmZhY2UsIENpcmNsZVByb2dyZXNzT3B0aW9ucyB9IGZyb20gJy4vbmctY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtDaXJjbGVQcm9ncmVzc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdDaXJjbGVQcm9ncmVzc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IENpcmNsZVByb2dyZXNzT3B0aW9uc0ludGVyZmFjZSA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ0NpcmNsZVByb2dyZXNzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zLCB1c2VWYWx1ZTogb3B0aW9ucyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19