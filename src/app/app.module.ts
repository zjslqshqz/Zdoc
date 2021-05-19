// 导入 angular 组件
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
// 路由配置
import {AppRoutingModule} from './app-routing.module';
// WPA支持
import {ServiceWorkerModule} from '@angular/service-worker';
// 环境变量
import {environment} from '../environments/environment';
// 导入 ng-zorro-antd 组件
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
// 导入全部图标
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
// 导入页面组件
import {AppComponent} from './app.component';
import {LayoutMainComponent} from './layout-main/layout-main.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutMainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        HttpClientModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule.forRoot(icons),
        NzBreadCrumbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
