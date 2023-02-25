import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AdvancedSearchPage } from './advanced_search.page';

describe('Advanced_searchPage', () => {
  let component: AdvancedSearchPage;
  let fixture: ComponentFixture<AdvancedSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedSearchPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancedSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
