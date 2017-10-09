import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatlingappRegionMySuffixModule } from './region/region-my-suffix.module';
import { GatlingappCountryMySuffixModule } from './country/country-my-suffix.module';
import { GatlingappLocationMySuffixModule } from './location/location-my-suffix.module';
import { GatlingappDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { GatlingappTaskMySuffixModule } from './task/task-my-suffix.module';
import { GatlingappEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { GatlingappJobMySuffixModule } from './job/job-my-suffix.module';
import { GatlingappJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GatlingappRegionMySuffixModule,
        GatlingappCountryMySuffixModule,
        GatlingappLocationMySuffixModule,
        GatlingappDepartmentMySuffixModule,
        GatlingappTaskMySuffixModule,
        GatlingappEmployeeMySuffixModule,
        GatlingappJobMySuffixModule,
        GatlingappJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatlingappEntityModule {}
