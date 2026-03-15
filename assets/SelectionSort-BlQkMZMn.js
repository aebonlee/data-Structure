import{j as s,L as e}from"./index-DQ3FoKqk.js";import{S as r}from"./SEOHead-ZmeIlSyn.js";import{u as n}from"./useAOS-CRA2ZcoE.js";const l=()=>(n(),s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"선택 정렬 | 자료구조 학습",description:"선택 정렬의 개념, 동작 과정, 시간 복잡도 O(n²), 불안정 정렬의 특징, Python 구현을 학습합니다."}),s.jsx("div",{className:"page-header","data-aos":"fade-down",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"선택 정렬"}),s.jsx("p",{className:"page-header-desc",children:"매 단계에서 가장 작은 요소를 선택하여 앞쪽에 배치하는 정렬 알고리즘입니다. 교환 횟수가 최소화되지만 비교 횟수는 항상 O(n²)입니다."})]})}),s.jsx("div",{className:"lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"선택 정렬의 개념"}),s.jsxs("p",{children:["선택 정렬(Selection Sort)은 배열에서 ",s.jsx("strong",{children:"가장 작은 요소를 찾아(선택하여)"}),' 현재 위치의 요소와 교환하는 방식으로 동작합니다. 정렬되지 않은 부분에서 최솟값을 반복적으로 선택하므로 "선택 정렬"이라 불립니다.']}),s.jsx("p",{children:"버블 정렬과 달리 매 회전에서 교환이 최대 1번만 발생하여 교환(swap) 비용이 중요한 경우에 버블 정렬보다 유리합니다."})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"동작 과정"}),s.jsx("p",{children:"배열 [29, 10, 14, 37, 13]을 오름차순으로 정렬하는 과정입니다."}),s.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[s.jsx("div",{className:"code-header",children:"선택 정렬 동작 과정"}),s.jsx("pre",{children:s.jsx("code",{children:`초기 배열: [29, 10, 14, 37, 13]

[1회전] 인덱스 0~4에서 최솟값 10 선택 → 인덱스 0과 교환
  [29, 10, 14, 37, 13] → [10, 29, 14, 37, 13]  ✓ 10 확정

[2회전] 인덱스 1~4에서 최솟값 13 선택 → 인덱스 1과 교환
  [10, 29, 14, 37, 13] → [10, 13, 14, 37, 29]  ✓ 13 확정

[3회전] 인덱스 2~4에서 최솟값 14 선택 → 이미 올바른 위치
  [10, 13, 14, 37, 29] → [10, 13, 14, 37, 29]  ✓ 14 확정

[4회전] 인덱스 3~4에서 최솟값 29 선택 → 인덱스 3과 교환
  [10, 13, 14, 37, 29] → [10, 13, 14, 29, 37]  ✓ 29, 37 확정

결과: [10, 13, 14, 29, 37]`})})]}),s.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[s.jsx("strong",{children:"핵심 관찰:"})," 매 회전마다 정렬되지 않은 영역에서 최솟값을 찾아 현재 위치에 놓습니다. 앞에서부터 하나씩 확정되어 나갑니다."]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsxs("h2",{children:["시간 복잡도 O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"경우"}),s.jsx("th",{children:"시간 복잡도"}),s.jsx("th",{children:"설명"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"최선 (Best)"}),s.jsxs("td",{children:["O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsx("td",{children:"이미 정렬되어도 모든 비교 수행"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"평균 (Average)"}),s.jsxs("td",{children:["O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsx("td",{children:"무작위 배열"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"최악 (Worst)"}),s.jsxs("td",{children:["O(n",s.jsx("sup",{children:"2"}),")"]}),s.jsx("td",{children:"역순 배열"})]})]})]}),s.jsx("p",{children:"비교 횟수는 항상 n(n-1)/2로 일정합니다. 다만, 교환 횟수는 최대 n-1번으로 버블 정렬의 최악의 교환 횟수(n(n-1)/2)보다 훨씬 적습니다."}),s.jsxs("table",{className:"lesson-table","data-aos":"fade-up",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"특성"}),s.jsx("th",{children:"값"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"공간 복잡도"}),s.jsx("td",{children:"O(1) - 제자리 정렬 (In-place)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"안정 정렬"}),s.jsx("td",{children:"No - 같은 값의 상대적 순서가 바뀔 수 있음"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"비교 횟수"}),s.jsx("td",{children:"항상 n(n-1)/2"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"교환 횟수"}),s.jsx("td",{children:"최대 n-1"})]})]})]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"특징: 불안정 정렬"}),s.jsxs("p",{children:["선택 정렬은 ",s.jsx("strong",{children:"불안정 정렬(Unstable Sort)"}),"입니다. 같은 값을 가진 요소의 원래 상대적 순서가 정렬 후에 변경될 수 있습니다."]}),s.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[s.jsx("div",{className:"code-header",children:"불안정 정렬 예시"}),s.jsx("pre",{children:s.jsx("code",{children:`# 불안정 정렬의 예시
# 배열: [(3, 'A'), (2, 'B'), (3, 'C'), (1, 'D')]
# 첫 번째 값으로 정렬할 때:

# 1회전: 최솟값 (1,'D')를 인덱스 0과 교환
# [(3,'A'), (2,'B'), (3,'C'), (1,'D')]
# → [(1,'D'), (2,'B'), (3,'C'), (3,'A')]
#                              ↑ (3,'A')와 (3,'C')의 순서가 바뀜!

# 안정 정렬이었다면 (3,'A')가 (3,'C')보다 앞에 있어야 함
# 하지만 선택 정렬은 교환 과정에서 순서가 바뀔 수 있음`})})]}),s.jsxs("div",{className:"callout-box","data-aos":"fade-up",children:[s.jsx("strong",{children:"안정 정렬 vs 불안정 정렬:"})," 안정 정렬은 같은 키를 가진 요소의 원래 순서를 보장합니다. 데이터베이스에서 여러 기준으로 정렬할 때 안정 정렬이 중요합니다. 안정 정렬: 버블, 삽입, 병합 / 불안정 정렬: 선택, 퀵, 힙"]})]}),s.jsxs("section",{className:"lesson-section","data-aos":"fade-up",children:[s.jsx("h2",{children:"구현"}),s.jsxs("div",{className:"code-block","data-aos":"fade-up",children:[s.jsx("div",{className:"code-header",children:"선택 정렬 구현"}),s.jsx("pre",{children:s.jsx("code",{children:`def selection_sort(arr):
    """선택 정렬: 매 회전에서 최솟값을 선택하여 앞에 배치"""
    n = len(arr)
    for i in range(n - 1):
        # 정렬되지 않은 부분에서 최솟값의 인덱스 찾기
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # 최솟값을 현재 위치로 교환
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# 테스트
data = [64, 25, 12, 22, 11]
print(selection_sort(data[:]))  # [11, 12, 22, 25, 64]

# 최댓값을 선택하는 내림차순 버전
def selection_sort_desc(arr):
    n = len(arr)
    for i in range(n - 1):
        max_idx = i
        for j in range(i + 1, n):
            if arr[j] > arr[max_idx]:
                max_idx = j
        if max_idx != i:
            arr[i], arr[max_idx] = arr[max_idx], arr[i]
    return arr

print(selection_sort_desc([64, 25, 12, 22, 11]))
# [64, 25, 22, 12, 11]

# 과정 출력 버전
def selection_sort_verbose(arr):
    n = len(arr)
    arr = arr[:]
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        if min_idx != i:
            print(f"[{i+1}회전] 최솟값 {arr[min_idx]}(인덱스 {min_idx}) ↔ "
                  f"{arr[i]}(인덱스 {i})")
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
        else:
            print(f"[{i+1}회전] {arr[i]}이 이미 올바른 위치")
        print(f"  → {arr}")
    return arr

selection_sort_verbose([29, 10, 14, 37, 13])`})})]})]}),s.jsxs("div",{className:"exercise-box","data-aos":"fade-up",children:[s.jsx("h3",{children:"연습 문제"}),s.jsxs("ol",{children:[s.jsx("li",{children:"배열 [8, 5, 2, 9, 5, 6, 3]을 선택 정렬로 정렬하는 각 회전의 과정을 손으로 추적하세요."}),s.jsx("li",{children:"선택 정렬이 불안정 정렬임을 보여주는 구체적인 예시를 만들어 보세요."}),s.jsx("li",{children:'선택 정렬을 변형하여 매 회전마다 최솟값과 최댓값을 동시에 찾아 양쪽 끝에 배치하는 "이중 선택 정렬"을 구현하세요.'})]})]})]})})}),s.jsxs("nav",{className:"lesson-nav","data-aos":"fade-up",children:[s.jsxs(e,{to:"/algorithm/bubble-sort",className:"lesson-nav-prev",children:[s.jsx("span",{className:"lesson-nav-label",children:"이전"}),s.jsx("span",{className:"lesson-nav-title",children:"버블 정렬"})]}),s.jsxs(e,{to:"/algorithm/insertion-sort",className:"lesson-nav-next",children:[s.jsx("span",{className:"lesson-nav-label",children:"다음"}),s.jsx("span",{className:"lesson-nav-title",children:"삽입 정렬"})]})]})]}));export{l as default};
