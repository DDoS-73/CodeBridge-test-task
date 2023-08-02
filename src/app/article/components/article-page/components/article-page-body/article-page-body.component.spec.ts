import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageBodyComponent } from './article-page-body.component';

describe('ArticlePageBodyComponent', () => {
  let component: ArticlePageBodyComponent;
  let fixture: ComponentFixture<ArticlePageBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePageBodyComponent]
    });
    fixture = TestBed.createComponent(ArticlePageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
