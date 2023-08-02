import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageImageComponent } from './article-page-image.component';

describe('ArticlePageImageComponent', () => {
  let component: ArticlePageImageComponent;
  let fixture: ComponentFixture<ArticlePageImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePageImageComponent]
    });
    fixture = TestBed.createComponent(ArticlePageImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
