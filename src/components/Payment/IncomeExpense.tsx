export function IncomeExpense() {
  return (
    <section className="mt-4 bg-gray-900 p-4 rounded-lg">
      <h2 className="text-lg font-semibold">Направление</h2>
      <table className="w-full text-sm text-gray-300">
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Ссылаться</th>
            <th>Зарабатывать</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Январь</td>
            <td>20</td>
            <td>+100.00</td>
          </tr>
          <tr>
            <td>Февраль</td>
            <td>18</td>
            <td>+90.00</td>
          </tr>
          <tr>
            <td>Март</td>
            <td>24</td>
            <td>+120.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
