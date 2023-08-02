import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageDescriptionComponent } from './article-page-description.component';

describe('ArticlePageDescriptionComponent', () => {
  let component: ArticlePageDescriptionComponent;
  let fixture: ComponentFixture<ArticlePageDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePageDescriptionComponent]
    });
    fixture = TestBed.createComponent(ArticlePageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
