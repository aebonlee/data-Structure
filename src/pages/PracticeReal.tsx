import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import useAOS from '../hooks/useAOS';

const questions = [
  {
    id: 1,
    q: '대량의 사용자 요청을 순서대로 처리해야 하는 웹 서버의 작업 큐에 가장 적합한 자료구조는?',
    opts: ['A. 스택(Stack)', 'B. 큐(Queue)', 'C. 이진 탐색 트리', 'D. 해시 테이블'],
    ans: 'B',
    exp: '작업을 순서대로(FIFO) 처리해야 하므로 큐가 가장 적합합니다. 스택은 LIFO이므로 순서가 뒤바뀌고, BST나 해시 테이블은 순서 보장이 목적이 아닙니다.',
  },
  {
    id: 2,
    q: '마이크로서비스 간 메시지 전달 시스템을 설계할 때, 우선순위가 높은 메시지를 먼저 처리해야 한다면 적합한 자료구조는?',
    opts: ['A. 일반 큐', 'B. 스택', 'C. 우선순위 큐(힙)', 'D. 연결 리스트'],
    ans: 'C',
    exp: '우선순위 큐(힙)는 우선순위가 가장 높은 원소를 O(log n)에 추출할 수 있어, 메시지 우선순위 처리에 최적입니다.',
  },
  {
    id: 3,
    q: '웹 브라우저의 캐시를 구현할 때, 가장 오래 전에 사용된 항목을 제거하는 LRU 캐시에 적합한 자료구조 조합은?',
    opts: ['A. 배열 + 스택', 'B. 해시 맵 + 이중 연결 리스트', 'C. 이진 탐색 트리 + 큐', 'D. 해시 테이블 + 배열'],
    ans: 'B',
    exp: '해시 맵으로 O(1) 접근을 보장하고, 이중 연결 리스트로 사용 순서를 관리하면 삽입/삭제/갱신을 모두 O(1)에 처리할 수 있습니다.',
  },
  {
    id: 4,
    q: '실시간 게임 랭킹 시스템에서 점수 업데이트와 상위 K명 조회를 빠르게 처리하려면 가장 적합한 자료구조는?',
    opts: ['A. 정렬된 배열', 'B. 해시 테이블', 'C. 균형 이진 탐색 트리(예: Red-Black Tree)', 'D. 큐(Queue)'],
    ans: 'C',
    exp: '균형 BST는 삽입/삭제/검색이 O(log n)이며, 순서 통계(Order Statistic)를 지원하여 상위 K명 조회도 효율적입니다. 정렬된 배열은 삽입이 O(n)으로 느립니다.',
  },
  {
    id: 5,
    q: '검색 엔진의 자동완성(Autocomplete) 기능을 구현할 때 가장 효율적인 자료구조는?',
    opts: ['A. 해시 테이블', 'B. 트라이(Trie)', 'C. 이진 탐색 트리', 'D. 스택'],
    ans: 'B',
    exp: '트라이는 접두사(prefix) 기반 검색에 최적화되어 있어 자동완성에 적합합니다. 입력된 접두사까지 탐색 후 하위 노드를 순회하면 후보 목록을 빠르게 얻을 수 있습니다.',
  },
  {
    id: 6,
    q: 'SNS에서 친구 추천(친구의 친구) 기능을 구현할 때 적합한 자료구조와 알고리즘 조합은?',
    opts: ['A. 배열 + 이진 탐색', 'B. 그래프 + BFS', 'C. 스택 + DFS', 'D. 해시 테이블 + 선형 탐색'],
    ans: 'B',
    exp: '소셜 네트워크를 그래프로 모델링하고 BFS로 2-hop 이내의 노드를 탐색하면 "친구의 친구"를 효율적으로 찾을 수 있습니다.',
  },
  {
    id: 7,
    q: '대용량 서버 로그에서 최근 1시간 내 가장 빈번한 에러 코드 Top 5를 실시간으로 추적하려면 적합한 자료구조 조합은?',
    opts: ['A. 배열 + 버블 정렬', 'B. 해시 맵 + 최소 힙(크기 5)', 'C. 연결 리스트 + 이진 탐색', 'D. 스택 + 큐'],
    ans: 'B',
    exp: '해시 맵으로 각 에러 코드의 빈도를 O(1)에 갱신하고, 크기 5인 최소 힙으로 상위 5개를 유지하면 효율적인 실시간 Top-K 추적이 가능합니다.',
  },
  {
    id: 8,
    q: '데이터베이스에서 범위 검색(예: 가격이 1000~5000인 상품)을 효율적으로 지원하기 위해 사용되는 인덱스 구조는?',
    opts: ['A. 해시 인덱스', 'B. B+ 트리 인덱스', 'C. 비트맵 인덱스', 'D. 역 인덱스(Inverted Index)'],
    ans: 'B',
    exp: 'B+ 트리는 리프 노드가 정렬된 연결 리스트를 형성하여 범위 검색에 매우 효율적입니다. 해시 인덱스는 등가 검색만 지원하고 범위 검색에는 부적합합니다.',
  },
  {
    id: 9,
    q: '코딩 면접에서 "주어진 배열에서 두 수의 합이 target인 쌍을 찾아라"는 문제를 O(n) 시간에 풀 때 사용하는 자료구조는?',
    opts: ['A. 스택', 'B. 큐', 'C. 해시 맵(Set)', 'D. 이진 탐색 트리'],
    ans: 'C',
    exp: '배열을 순회하면서 해시 맵에 값을 저장하고, 각 원소에 대해 target - 현재값이 해시 맵에 있는지 O(1)에 확인하면 전체 O(n)에 해결됩니다.',
  },
  {
    id: 10,
    q: '대규모 분산 시스템에서 서버 간 데이터 파티셔닝을 균등하게 분배하기 위해 사용하는 기법은?',
    opts: ['A. 선형 탐사(Linear Probing)', 'B. 일관된 해싱(Consistent Hashing)', 'C. 이진 탐색(Binary Search)', 'D. 버블 정렬(Bubble Sort)'],
    ans: 'B',
    exp: '일관된 해싱은 서버 추가/제거 시 재배치가 최소화되어, 분산 캐시(Redis Cluster), 로드 밸런서 등에서 널리 사용됩니다.',
  },
];

const PracticeReal = (): React.ReactElement => {
  useAOS();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (qId: number, val: string) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => { setAnswers({}); setSubmitted(false); };

  const getScore = () => questions.filter(q => answers[q.id] === q.ans).length;

  return (
    <>
      <SEOHead
        title="실전 문제 | 자료구조 학습"
        description="실무 시나리오 기반의 자료구조 선택, 시스템 설계, 코딩 면접 문제 10선으로 실전 역량을 점검합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>실전 문제</h1>
          <p>실무 상황과 시스템 설계, 코딩 면접에서 자주 나오는 자료구조 활용 10문제</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            {submitted && (
              <div className="callout-box" data-aos="fade-up">
                <h3>채점 결과</h3>
                <p>
                  <strong>{getScore()}</strong> / {questions.length} 문제 정답
                  ({Math.round((getScore() / questions.length) * 100)}점)
                </p>
              </div>
            )}

            {questions.map((q, idx) => {
              const selected = answers[q.id];
              const isCorrect = selected === q.ans;

              return (
                <div key={q.id} className="exercise-box" data-aos="fade-up" data-aos-delay={idx * 50}>
                  <h3>문제 {q.id}.</h3>
                  <p><strong>{q.q}</strong></p>
                  <div className="quiz-options-area">
                    {q.opts.map((opt) => {
                      const val = opt.charAt(0);
                      const isSelected = selected === val;
                      let cls = 'quiz-option';

                      if (submitted) {
                        cls += ' quiz-option--disabled';
                        if (val === q.ans) {
                          cls += ' quiz-option--correct';
                        } else if (isSelected && !isCorrect) {
                          cls += ' quiz-option--wrong';
                        }
                      } else if (isSelected) {
                        cls += ' quiz-option--selected';
                      }

                      return (
                        <label
                          key={val}
                          className={cls}
                          onClick={() => handleSelect(q.id, val)}
                        >
                          <input
                            type="radio"
                            name={`q${q.id}`}
                            checked={isSelected}
                            onChange={() => handleSelect(q.id, val)}
                            className="quiz-radio"
                            disabled={submitted}
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className={`quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`}>
                      <strong>{isCorrect ? '정답!' : `오답 (정답: ${q.ans})`}</strong>
                      <br />
                      {q.exp}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="quiz-submit-area" data-aos="fade-up">
              {!submitted ? (
                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length < questions.length}
                >
                  제출하기 ({Object.keys(answers).length}/{questions.length})
                </button>
              ) : (
                <button className="btn btn-secondary" onClick={handleReset}>
                  다시 풀기
                </button>
              )}
            </div>

            <div className="lesson-nav" data-aos="fade-up">
              <Link to="/practice/advanced" className="lesson-nav-btn prev">&larr; 고급 문제</Link>
              <Link to="/references" className="lesson-nav-btn next">참고자료 &rarr;</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeReal;
