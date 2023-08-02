import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageTitleComponent } from './article-page-title.component';

describe('ArticlePageTitleComponent', () => {
  let component: ArticlePageTitleComponent;
  let fixture: ComponentFixture<ArticlePageTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePageTitleComponent]
    });
    fixture = TestBed.createComponent(ArticlePageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
