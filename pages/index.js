import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Switch } from '../components/ui/switch';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

const ProgramFormPreview = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",
    programLength: "16",
    initialPaymentAmount: "5400",
    initialPaymentCount: "1",
    subsequentPaymentAmount: "300",
    subsequentPaymentCount: "0",
    bonusWeeks: false,
    upgradeOption: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const hasSubsequentPayments =
    parseInt(formData.subsequentPaymentCount) > 0 &&
    parseInt(formData.subsequentPaymentAmount) > 0;

  const generateRemainingPaymentsText = () => {
    if (hasSubsequentPayments) {
      return `${formData.subsequentPaymentCount} payment${
        parseInt(formData.subsequentPaymentCount) > 1 ? "s" : ""
      } of $${formData.subsequentPaymentAmount}`;
    }
    return "";
  };

  const generateBonusWeeksText = () => {
    if (formData.bonusWeeks) {
      const baseWeeks = parseInt(formData.programLength);
      const totalWeeks = baseWeeks + 4;
      return `Program includes ${baseWeeks} weeks plus 4 bonus weeks, for a total of ${totalWeeks} weeks.`;
    }
    return "";
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Client Name</Label>
              <Input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
                placeholder="john@example.com"
              />
            </div>
            {/* Add other fields here */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgramFormPreview;
