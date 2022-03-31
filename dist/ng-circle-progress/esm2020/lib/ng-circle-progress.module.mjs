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
NgCircleProgressModule.ɵfac = function NgCircleProgressModule_Factory(t) { return new (t || NgCircleProgressModule)(); };
NgCircleProgressModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NgCircleProgressModule });
NgCircleProgressModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgCircleProgressModule, [{
        type: NgModule,
        args: [{
                declarations: [CircleProgressComponent],
                imports: [
                    CommonModule
                ],
                exports: [CircleProgressComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgCircleProgressModule, { declarations: [CircleProgressComponent], imports: [CommonModule], exports: [CircleProgressComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2lyY2xlLXByb2dyZXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNpcmNsZS1wcm9ncmVzcy9zcmMvbGliL25nLWNpcmNsZS1wcm9ncmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBa0MscUJBQXFCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFVaEksTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQTBDLEVBQUU7UUFDekQsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7YUFDdEQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7NEZBUlUsc0JBQXNCO3dFQUF0QixzQkFBc0I7NEVBTHhCO1lBQ1AsWUFBWTtTQUNiO3VGQUdVLHNCQUFzQjtjQVBsQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ25DOzt3RkFDWSxzQkFBc0IsbUJBTmxCLHVCQUF1QixhQUVwQyxZQUFZLGFBRUosdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudCwgQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zSW50ZXJmYWNlLCBDaXJjbGVQcm9ncmVzc09wdGlvbnMgfSBmcm9tICcuL25nLWNpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NpcmNsZVByb2dyZXNzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ2lyY2xlUHJvZ3Jlc3NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBDaXJjbGVQcm9ncmVzc09wdGlvbnNJbnRlcmZhY2UgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdDaXJjbGVQcm9ncmVzc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdDaXJjbGVQcm9ncmVzc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IENpcmNsZVByb2dyZXNzT3B0aW9ucywgdXNlVmFsdWU6IG9wdGlvbnMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==