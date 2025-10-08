import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    address: "",
    residencePeriod: "",
    behavior: "",
    neighborRelations: "",
    additionalInfo: "",
    issuedBy: "",
    position: "",
    date: new Date().toLocaleDateString("ru-RU"),
  });

  const handlePrint = () => {
    window.print();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="no-print mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="FileText" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1E3A8A]">
                Характеристика с места жительства
              </h1>
              <p className="text-sm text-muted-foreground">
                Официальный документ для суда
              </p>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon name="Printer" className="mr-2" size={18} />
            Печать
          </Button>
        </div>

        <Card className="p-8 md:p-12 bg-white shadow-lg print:shadow-none">
          <div className="document-content">
            <div className="text-center mb-8 pb-6 border-b-2 border-primary">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center">
                  <Icon name="Building" className="text-primary" size={32} />
                </div>
              </div>
              <h2 className="text-xl font-bold uppercase mb-2 text-primary">
                Характеристика
              </h2>
              <p className="text-sm text-muted-foreground">
                с места жительства
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-primary font-medium">
                    Фамилия, Имя, Отчество
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 border-primary/50 focus:border-primary"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="birthDate" className="text-primary font-medium">
                      Дата рождения
                    </Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="mt-1 border-primary/50 focus:border-primary"
                      placeholder="01.01.1980"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="residencePeriod"
                      className="text-primary font-medium"
                    >
                      Период проживания
                    </Label>
                    <Input
                      id="residencePeriod"
                      name="residencePeriod"
                      value={formData.residencePeriod}
                      onChange={handleInputChange}
                      className="mt-1 border-primary/50 focus:border-primary"
                      placeholder="С 2015 года по настоящее время"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-primary font-medium">
                    Адрес проживания
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 border-primary/50 focus:border-primary"
                    placeholder="г. Москва, ул. Примерная, д. 1, кв. 1"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Shield" className="text-primary" size={20} />
                  <h3 className="font-bold text-primary">
                    Характеристика поведения
                  </h3>
                </div>
                <Textarea
                  id="behavior"
                  name="behavior"
                  value={formData.behavior}
                  onChange={handleInputChange}
                  className="min-h-32 border-primary/50 focus:border-primary"
                  placeholder="Характеризуется исключительно с положительной стороны. Соблюдает общественный порядок, законопослушен. За время проживания замечаний к поведению не поступало..."
                />
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Users" className="text-primary" size={20} />
                  <h3 className="font-bold text-primary">
                    Отношения с соседями
                  </h3>
                </div>
                <Textarea
                  id="neighborRelations"
                  name="neighborRelations"
                  value={formData.neighborRelations}
                  onChange={handleInputChange}
                  className="min-h-32 border-primary/50 focus:border-primary"
                  placeholder="С соседями поддерживает доброжелательные отношения. Вежлив, отзывчив. Конфликтных ситуаций не возникало..."
                />
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="FileCheck" className="text-primary" size={20} />
                  <h3 className="font-bold text-primary">
                    Дополнительная информация
                  </h3>
                </div>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="min-h-32 border-primary/50 focus:border-primary"
                  placeholder="Участвует в общественной жизни дома, оказывает помощь при необходимости. Имеет положительную репутацию среди жильцов..."
                />
              </div>
            </div>

            <div className="pt-6 border-t-2 border-primary space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="issuedBy" className="text-primary font-medium">
                    Выдана
                  </Label>
                  <Input
                    id="issuedBy"
                    name="issuedBy"
                    value={formData.issuedBy}
                    onChange={handleInputChange}
                    className="mt-1 border-primary/50 focus:border-primary"
                    placeholder="ТСЖ / Управляющая компания"
                  />
                </div>
                <div>
                  <Label htmlFor="position" className="text-primary font-medium">
                    Должность
                  </Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="mt-1 border-primary/50 focus:border-primary"
                    placeholder="Председатель ТСЖ"
                  />
                </div>
              </div>

              <div className="flex justify-between items-end pt-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Подпись</p>
                  <div className="w-48 border-b-2 border-primary/50"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Дата</p>
                  <div className="w-32 text-center font-medium">
                    {formData.date}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Icon name="Shield" size={16} />
                <p>М.П. (место для печати)</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="no-print mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex gap-3">
            <Icon name="Info" className="text-blue-600 mt-1" size={20} />
            <div className="text-sm text-blue-900">
              <p className="font-medium mb-1">Рекомендации по заполнению:</p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Заполните все поля формы</li>
                <li>Укажите конкретные факты и примеры законопослушного поведения</li>
                <li>После заполнения нажмите "Печать" для сохранения документа</li>
                <li>Документ должен быть заверен печатью организации и подписью</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            background: white;
          }
          .no-print {
            display: none !important;
          }
          .document-content {
            font-family: 'Roboto', sans-serif;
            color: #1E3A8A;
          }
          @page {
            margin: 2cm;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
